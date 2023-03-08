import card from './card';

export default {
    title: 'card',
    component: card,
    parameters: {
        layout: 'centered',
    },
};

export const Template = (args) => <card {...args} />;