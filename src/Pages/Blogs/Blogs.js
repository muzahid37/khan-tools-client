import React from "react";

const Blogs = () => {
  return (
    <div className=" ">
      <div className="border-solid border-2 border-primary-600 m-5 shadow-xl p-8 rounded-md  mx-auto w-4/5 my-12">
        <h2 className="text-3xl font-bold my-2">
          <span className="text-red-500">Q.1:</span>How will you improve the
          performance of a React Application?
        </h2>
        <p className="text-3xl font-bold my-2">
          <span className="text-primary">ANS.</span>How will i improve the
          performance of a React Application:
        </p>
        <ul>
          <li>
            1.Detecting wasted Renders in a React 16 using React performance
            optimization tools
          </li>
          <li>
            2.Detecting unnecessary rendering of components by using “Why did
            you update” library
          </li>
          <li>
            3.React performance tuning by fixing unnecessary rendering of
            components in React
          </li>
          <li>
            4.Implementing shouldComponentUpdate for preventing unnecessary
            renders
          </li>
        </ul>
      </div>

      <div className="border-solid border-2 border-primary-600 m-5 shadow-xl p-8 rounded-md  mx-auto w-4/5 my-12">
        <h2 className="text-2xl font-bold my-2">
          <span className="text-red-500">
            Q.2:What is a unit test? Why should write unit tests?
          </span>
        </h2>

        <p className="text-3xl font-bold my-2">
          <span className="text-primary">ANS.</span> unit test:
        </p>
        <p>
          Unit testing is a type of software testing where individual units or
          software components are tested. Its purpose is to validate that each
          unit of code performs as expected
        </p>

        <p className="text-2xl font-bold my-2">
          <span className="text-primary">ANS.</span> Why should write unit tests
        </p>
        <p>
          {" "}
          To justify any effort in business, there must be a positive impact on
          the bottom line. Here are a few benefits to writing unit tests:
        </p>
        <ul>
          <li>
            1.Well-written unit tests act as documentation for your code. Any
            developer can quickly look at your tests and know the purpose of
            your functions.
          </li>
          <li>2.It simplifies the debugging </li>
          <li>
            3.Unit tests make code reuse easier. If you want to reuse existing
            code in a new project, you can simply migrate both the code and
            tests to your new project, then run your tests to make sure you have
            the desired results.
          </li>
        </ul>
      </div>
     

      <div className="border-solid border-2 border-primary-600 m-5 shadow-xl p-8 rounded-md  mx-auto w-4/5 my-12">
        <h2 className="text-3xl font-bold my-2">
          <span className="text-red-500">Q.1:</span> How does prototypical
          inheritance work?
        </h2>
        <p className="text-3xl font-bold my-2">
          <span className="text-primary">ANS.</span>জাভাস্ক্রিপ্টের সবকিছুই একটি
          বস্তু। এমনকি যখন একটি ক্লাস তৈরি করা হয় একটি অবজেক্ট লিটারাল বা
          কনস্ট্রাক্টর ফাংশনের মাধ্যমে একটি অবজেক্ট। এইভাবে জাভাস্ক্রিপ্ট
          ক্লাস-ভিত্তিক প্রোগ্রামিং করে অন্যান্য প্রথাগত object orianted
          Oriented Programming languages  মতো যেখানে তারা কীওয়ার্ড 'Class' এবং 'inheritance'
          ব্যবহার করে। জাভাস্ক্রিপ্টের ক্লাস-ভিত্তিক প্রোগ্রামিং এবং অন্যান্য
          ঐতিহ্যগত ক্লাস-ভিত্তিক প্রোগ্রামিং ভাষার সংস্করণ একই ধারণার সাথে কাজ
          করে কিন্তু ঠিক একই রকম কাজ করে না। এর কীওয়ার্ড, সিনট্যাক্স এবং এটি
          কীভাবে কাজ করে তার মধ্যে পার্থক্য রয়েছে। । সুতরাং, prototypical
          inheritance  মূল ধারণা হল
          যে একটি বস্তু অন্য বস্তুর দিকে নির্দেশ করতে পারে এবং তার সমস্ত
          বৈশিষ্ট্য উত্তরাধিকার সূত্রে পেতে পারে। মূল উদ্দেশ্য হল একটি বস্তুর
          একাধিক দৃষ্টান্তকে সাধারণ বৈশিষ্ট্যগুলি ভাগ করার অনুমতি দেওয়া ৷ 
        </p>
      </div>
    </div>
  );
};

export default Blogs;
