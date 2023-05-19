import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog')

    return (
        <div className='mb-6 py-4 bg-gray-200'>
           <h2  className='text-3xl font-bold text-center'>Our Blog Section</h2>
            <p className='text-center text-gray-600 font-semibold'>there have some Q&A. I think it helps you to clear some concept.</p>

           
            <div className='my-4 bg-white rounded-lg p-4 mx-6'>
             <h4 className='text-xl font-semibold'>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
             <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times . The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <br />
             Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie and I need it for most of my requests to the Resource Server anyway. <br />
             </p>
            </div>

            <div className='my-4 bg-white rounded-lg p-4 mx-6'>
             <h4 className='text-xl font-semibold'>2.Compare SQL and NoSQL databases?</h4>
             <p>Answer: <br />SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON

             </p>
            </div>

            <div className='my-4 bg-white rounded-lg p-4 mx-6'>
             <h4 className='text-xl font-semibold'>3.What is express js? What is Nest JS ?</h4>
             <p>Answer: <br />
             Next js and Express js are two different frameworks that are used to build different sets of applications. While ExpressJs is a Node. js-based web application framework to build APIs and server-side applications, NextJs on the other hand is a react-based framework used for creating static websites and SEO optimizations.
             </p>
            </div>
            <div className='my-4 mb-6 bg-white rounded-lg p-4 mx-6'>
             <h4 className='text-xl font-semibold'>4.What is MongoDB aggregate and how does it work</h4>
             <p>Answer : <br />
             Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. <br />
             The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
             </p>
            </div>
        </div>
    );
};

export default Blog;