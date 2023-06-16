import Card from './card';

type CardProps = React.ComponentProps<typeof Card>;

export default {
    title: 'card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
};

export const Template: React.FC<CardProps> = (args) => <Card {...args} />;
