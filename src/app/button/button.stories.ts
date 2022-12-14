import { Meta,Story } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

export default {
    title: 'button-type',
    component: ButtonComponent,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  } as Meta;
  
  const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
  });

  export const Solo = Template.bind({});
  Solo.args = {
    Title : 'Solo'
  };

  export const Group = Template.bind({});
  Group.args = {
    Title : 'All songs'
  };
