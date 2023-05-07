import React, { useState } from "react";

const AddProduct = () => {
  const initialState = [
    {
      pname: "",
      pquantity: "",
      pbrand: "",
      pprice: "",
    },
  ];
  const [formData, setFormData] = useState(initialState);

  const onChangeHandler = (e, index) => {
    const { value, name } = e.target;
    const list = [...formData];
    list[index][name] = value;
    setFormData(list);
  };

  const addMoreHandler = () => {
    setFormData([
      ...formData,
      { pname: "", pquantity: "", pbrand: "", pprice: "" },
    ]);
  };

  const onDeleteHandler = (item, index) => {
    console.log(item, index);
    const list = [...formData];
    list.splice(index, 1);
    setFormData(list);
    // setFormData(list);
  };

  const handleSubmit = (e) => {
    console.log(formData);
  };

  return (
    <>
      <h4>Add More Products</h4>
      <div className='container'>
        <div className='form-group'>
          {formData?.map((item, index) => (
            <div className='row' key={index}>
              <div className='col-3'>
                <label htmlFor='pname'>pname</label>
                <input
                  type='text'
                  name='pname'
                  onChange={(e) => onChangeHandler(e, index)}
                  value={item.pname}
                  id='pname'
                  className='form-control form-control-sm'
                />
              </div>
              <div className='col-3'>
                <label htmlFor='pquantity'>pquantity</label>
                <input
                  type='text'
                  name='pquantity'
                  onChange={(e) => onChangeHandler(e, index)}
                  value={item.pquantity}
                  id='pquantity'
                  className='form-control form-control-sm'
                />
              </div>
              <div className='col-3'>
                <label htmlFor='pbrand'>pbrand</label>
                <input
                  type='text'
                  name='pbrand'
                  onChange={(e) => onChangeHandler(e, index)}
                  value={item.pbrand}
                  id='pbrand'
                  className='form-control form-control-sm'
                />
              </div>
              <div className='col-2'>
                <label htmlFor='pprice'>pprice</label>
                <input
                  type='text'
                  name='pprice'
                  onChange={(e) => onChangeHandler(e, index)}
                  value={item.pprice}
                  id='pprice'
                  className='form-control form-control-sm'
                />
              </div>
              <div className='col-1'>
                {index == 0 && <label className='d-block'>Action</label>}
                {index !== 0 && (
                  <label className='d-block v-hidden'>Action</label>
                )}
                {formData.length > 1 && (
                  <button
                    type='button'
                    className='btn btn-sm btn-danger'
                    onClick={() => onDeleteHandler(item, index)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='form-group'>
          {formData.length >= 10 ? (
            <h6 className='text-danger'>can add max 10 records at time</h6>
          ) : (
            <h6 className='text-success'>
              <strong className='me-5'>Max entries : 10</strong>
              <strong className='me-5'>{`remaining entries: ${
                10 - formData.length
              }`}</strong>
            </h6>
          )}

          <button
            type='button'
            className='btn btn-primary my-5 me-5'
            onClick={addMoreHandler}
            disabled={formData.length >= 10}
          >
            ADD MORE +
          </button>
          <button
            type='button'
            className='btn btn-success'
            onClick={handleSubmit}
          >
            Submit data
          </button>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
