import React, { useState } from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Sheet, SheetContent, SheetTrigger, SheetFooter } from "@/lib/ui/sheet"
import { SegmentSideSheetProps } from '@/types/interface'
import { SegmentSchemaType, segmentSchema } from '@/lib/schema/schema';
import Header from './header/Header'
import { Input } from '@/lib/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from '@/lib/ui/select';
import Select from "react-select";

const SegmentSideSheet: React.FC<SegmentSideSheetProps> = ({ children }) => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors }
  } = useForm<SegmentSchemaType>({ mode: 'all', resolver: zodResolver(segmentSchema) });

  const onSubmit: SubmitHandler<SegmentSchemaType> = (data) => console.log(data);

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

  const handleAddNewSchema = () => {
    const segmentValue = getValues().segment_options
    console.log(segmentValue);
    if ((segmentValue && Object.keys(segmentValue).length !== 0)) {
      setDynamicSchemas([...dynamicSchemas, segmentValue])
      setValue('segment_options', {})
    }
  }
  console.log(errors)

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className='w-full max-w-lg'>
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
                  <Select
                  className='pointer-events-none'
                  options={segmentSchemaValues}
                  value={item}
                />
                ))
              }

              {/* <Controller
                name="segment_options"
                control={control}
                render={({ field }: any) => (
                  <Select
                    {...field}
                    onValueChange={(value: any) => {
                      const selectedItem = segmentSchemaValues.find(item => item.id === Number(value));
                      console.log(selectedItem);
                      field.onChange(selectedItem);
                    }}
                    value={field.value}
                  >``
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Add schema to segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {segmentSchemaValues.map((item) => (
                          <SelectItem key={item.id} value={item.id.toString()}> 
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              /> */}

              <Controller
                name="segment_options"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Select
                    options={segmentSchemaValues}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Select an option"
                  />
                )}
                />
            </div>

            <div>
              <p onClick={handleAddNewSchema}>+Add new schema</p>
            </div>
            <button type="submit">submit!</button>
          </form>
        </section>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}


export default SegmentSideSheet