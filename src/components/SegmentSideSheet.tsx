import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SegmentSchemaType, segmentSchema } from '@/lib/schema/schema';
import Header from './header/Header'
import { Input } from '@/lib/ui/input';
import Select from "react-select";
import { Minus } from 'lucide-react';
import { reactSelectStyles } from '@/lib/utils';

const SegmentSideSheet: React.FC<any> = ({ setopenSideSheet }: any) => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors }
  } = useForm<SegmentSchemaType>({ mode: 'all', shouldFocusError: false, resolver: zodResolver(segmentSchema) });

  const onSubmit: SubmitHandler<SegmentSchemaType> = (data) => {
    const payload = {
      segment_name: data.segment_name,
      schema: dynamicSchemas
    }
    alert(JSON.stringify(payload))
  }

  const segmentSchemaValues = [
    { id: 1, "label": 'First Name', "value": 'first_name' },
    { id: 2, "label": 'Last Name', "value": 'last_name' },
    { id: 3, "label": 'Gender', "value": 'gender' },
    { id: 4, "label": 'Age', "value": 'age' },
    { id: 5, "label": 'Account Name', "value": 'account_name' },
    { id: 6, "label": 'City', "value": 'city' },
    { id: 7, "label": 'State', "value": 'state' }
  ];

  const [dynamicSchemas, setDynamicSchemas] = useState<any>([])
  const [selectSchemasOptions, setSelectSchemasOptions] = useState([])

  useEffect(() => {
    const schemaOptions: any = segmentSchemaValues.filter((item1: any) => !dynamicSchemas.some((item2: any) => item2.id === item1.id))
    setSelectSchemasOptions(schemaOptions)
  }, [dynamicSchemas])


  const handleAddNewSchema = () => {
    const segmentValue = getValues().segment_options
    console.log(segmentValue);
    if ((segmentValue && Object.keys(segmentValue).length !== 0)) {
      setDynamicSchemas([...dynamicSchemas, segmentValue])
      setValue('segment_options', null)
    }
  }

  const handleRemove = (item: any) => {
    const schema = dynamicSchemas.filter((val: any) => val.id != item.id)
    setDynamicSchemas(schema)
  }

  return (

    <section className='h-full relative'>
      <Header headerTitle='Saving Segment' navigationPath='/' />
      <form onSubmit={handleSubmit(onSubmit)} className="segment-form  h-[calc(100vh-128px)] overflow-auto">
        <div className='p-4'>
          <div>
            <p className='py-3'>
              Enter the Name of the Segment
            </p>
            <Input className='py-2 border-2 border-gray-300' {...register("segment_name")} placeholder='Name of the segment' />
            {errors.segment_name && <span className='text-red-500 font-medium text-sm'>{errors.segment_name.message}</span>}
          </div>

          <div className='py-4'>
            <p>
              To save your segment, you need to add the schemas to build the query
            </p>

          </div>

          <div className='py-3'>
            <div className='flex flex-row justify-end space-x-2'>
              <p className='flex items-center'><span className='size-3 flex rounded-full bg-green-500 mr-1'></span> - User Traits</p>
              <p className='flex items-center'><span className='size-3 flex rounded-full bg-red-500 mr-1'></span> -  Group Traits</p>
            </div>

          </div>
          <div className='space-y-4 p-4'>

            {
              dynamicSchemas.map((item: any) => (
                <div className='flex space-x-3' key={item.id}>
                  <Select
                    className='pointer-events-none border border-gray-300 w-full'
                    options={segmentSchemaValues}
                    value={item}
                  />
                  <button className="py-2 px-3 bg-softMint" onClick={() => handleRemove(item)}>
                    <Minus className=" text-slateGrey" />
                  </button>
                </div>
              ))
            }

            {selectSchemasOptions.length > 0 && (<>
              <Controller
                name="segment_options"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Select
                    options={selectSchemasOptions}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Select an option"
                    styles={reactSelectStyles}
                    className='border border-gray-300'
                  />
                )}
              />
            </>)}
            <div className='py-2'>
              <button className="text-emeraldGreen text-sm font-medium " onClick={handleAddNewSchema} disabled={selectSchemasOptions.length == 0}> + <span className='text-decoration-line: underline'>Add new schema</span></button>
            </div>
          </div>
        </div>

        <div className='absolute w-full bottom-0 px-4 py-5 bg-gray-100 space-x-3 '>
          <button className='bg-seafoamGreen text-white text-md font-medium py-3 px-4 rounded-md' type="submit">Save the Segment</button>
          <button onClick={(e: any) => { e.preventDefault(); setopenSideSheet(false) }} type="button" className='bg-white text-red-500 text-md font-medium py-3 px-4 rounded-md'>Cancel</button>
        </div>
      </form>
    </section>
  )
}


export default SegmentSideSheet