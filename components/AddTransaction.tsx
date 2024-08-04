"use client";

import addTransaction from "@/app/actions/addTransaction";
import { useRef } from "react";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    console.log(formData.get("text"), formData.get("amount"));

    const { data, error } = await addTransaction(formData);

    if (error) {
      //   alert(error);
      toast.error(error);
    } else {
      toast.success("Transaction added");
      formRef.current?.reset();
      //   alert("Transaction Added");
      console.log(data);
    }
  };

  return (
    <>
      <h3>Add transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
