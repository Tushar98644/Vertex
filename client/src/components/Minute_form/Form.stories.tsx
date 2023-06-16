import Form from './Form';

export default {
    title: 'Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
};

export const Template = (args) => <Form {...args} />;
