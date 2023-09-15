import React, { useState } from 'react';

// const questions = [
//   {
//     id: 1,
//     subject: 'programmer',
//     question: 'kenapa menu pdf di tradelist engga bisa di buka?',
//   },
//   {
//     id: 2,
//     subject: 'programmer',
//     question: 'kenapa menu pdf di tradelist engga bisa di buka?',
//   },
//   {
//     id: 3,
//     subject: 'programmer',
//     question: 'kenapa menu pdf di tradelist engga bisa di buka?',
//   },
//   {
//     id: 4,
//     subject: 'programmer',
//     question: 'kenapa menu pdf di tradelist engga bisa di buka?',
//   },
// ];

function Faq() {
  return (
    <div className="helpdesk-faq">
      <div className="faq-header">
        <h2>FAQ (Frequently Asked Questions)</h2>
      </div>
      <div className="faq-box">
        <div className="divisions-faq">
          <h2>Divisions</h2>
          <hr />
          <button>
            ☀ Programmer <span>0</span>
          </button>
          <br />
          <hr />
          <button>
            ☀ It Support <span>0</span>
          </button>
          <br />
          <hr />
          <button>
            ☀ Infra <span>0</span>
          </button>
          <hr />
        </div>
        <div className="questions-faq">
          <h3>Questions</h3>
          <hr />
          <option value="">sel</option>
        </div>
      </div>
    </div>
  );
}

export default Faq;
