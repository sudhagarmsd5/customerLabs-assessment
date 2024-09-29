import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SegmentSchemaType, segmentSchema } from '@/lib/schema/schema';
import Header from './header/Header'
import { Input } from '@/lib/ui/input';
import Select from "react-select";
import { Minus } from 'lucide-react';

const SegmentSideSheet: React.FC<any> = ({}) => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors }
  } = useForm<SegmentSchemaType>({ mode: 'all', resolver: zodResolver(segmentSchema) });

  const onSubmit: SubmitHandler<SegmentSchemaType> = (data) => {

    const payload = {
      segment_name: data.segment_name,
      schema: dynamicSchemas
    }
    console.log(payload);

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



  const [dynamicSchemas, setDynamicSchemas] = useState([])
  const [selectSchemasOptions, setSelectSchemasOptions] = useState([])

  useEffect(() => {
    const schemaOptions = segmentSchemaValues.filter((item1: any) => !dynamicSchemas.some((item2) => item2.id === item1.id))

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

  const handleRemove = (item) => {
    const schema = dynamicSchemas.filter((val: any) => val.id != item.id)
    setDynamicSchemas(schema)
  }

  return (
    
    <section>
    <Header headerTitle='Saving Segment' navigationPath='/' />
    <form onSubmit={handleSubmit(onSubmit)} className="segment-form">
      <div className=''>
        <div>
          <p>
            Enter the Name of the Segment
          </p>
          <Input className='' {...register("segment_name")} placeholder='Name of the segment' />
          {errors.segment_name && <span className=''>{errors.segment_name.message}</span>}
        </div>

        <div>
          <p>
            To save your segment, you need to add the schemas to build the query
          </p>

        </div>

        <div>
          <p>
            User Traits
          </p>
          <p>
            Group Traits
          </p>

        </div>

        {
          dynamicSchemas.map((item: any, index) => (
            <div className='flex space-x-3'>
              <Select
                className='pointer-events-none'
                options={segmentSchemaValues}
                value={item}
              />
              <button className="p-2" onClick={() => handleRemove(item)}>
                <Minus className="size-5" />
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
              />
            )}
          />
        </>)}

      </div>

      <div>
        <button onClick={handleAddNewSchema} disabled={selectSchemasOptions.length == 0}>+Add new schema</button>
      </div>

      <button type="submit">submit!</button>
    </form>
  </section>
  )
}


export default SegmentSideSheet