import React from "react";
import Form from "./Form";

export default {
    component: Form,
    title: "Components/Form",
};

const Template = (args) => <Form {...args} />;

export const FormStory= Template.bind({});

FormStory.args = {
    type: "register"
};
