import { Meta,Story } from "@storybook/angular";
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from "./options.component";

export default {
    title: 'option',
    component: OptionsComponent,
  } as Meta;
  
  const Template: Story<OptionsComponent> = (args: OptionsComponent) => ({
    props: args,
  });

  export const Last7Days = Template.bind({});
  Last7Days.args = {
    Title : "Last 7 Days"
  };

  export const Last14Days = Template.bind({});
  Last14Days.args = {
    Title : "Last 14 Days"
  };

  export const Last30Days = Template.bind({});
  Last30Days.args = {
    Title : "Last 30 Days"
  };

  export const Last6Months = Template.bind({});
  Last6Months.args = {
    Title : "Last 6 Months"
  };

  export const LastYear = Template.bind({});
  LastYear.args = {
    Title : "Last Year"
  };

  export const Custom = Template.bind({});
  Custom.args = {
    Title : "Custom"
  };

