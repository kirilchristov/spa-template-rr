import React from "react";
import Layout from "../components/Layout";

const appliedClass = "flex flex-col text-left"

const Contact = () => (
  <Layout>
    <form className="flex flex-col space-y-5 w-1/2 m-auto" action="">
      <div className={appliedClass}>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div className={appliedClass}>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div className={appliedClass}>
        <label>More info:</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </form>
  </Layout>
);

export default Contact;
