import Gallery_base from "./Gallery_base";

export default {
    title: "Gallery_base",
    component: Gallery_base,
    parameters: {
        layout: "centered",
    },
};

export const Template = (args) => <Gallery_base {...args} />;