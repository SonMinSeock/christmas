import React from "react";
import * as AccountS from "./Account.style";
import * as TemplateS from "../../components/templates/template.style";
import Form from "../../components/moecules/Form/AccountForm/Form";

function Account() {
  return (
    <TemplateS.Layout>
      <AccountS.Header>
        <h1>
          새로운 친구와 소통할 SNS를 <br />
          알려주세요
        </h1>
      </AccountS.Header>
      <main>
        <Form />
      </main>
    </TemplateS.Layout>
  );
}

export default Account;
