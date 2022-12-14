import { Meta,Story } from "@storybook/angular";
import TableComponent from "./table.component";
import { ButtonComponent } from "../button/button.component";
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
    title: 'idol-group',
    component: TableComponent,
    args : {
      BgColor : 'aqua'
    },
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
    decorators: [
      moduleMetadata({
        declarations: [ButtonComponent],
        imports: [CommonModule],
      }),
    ],
  } as Meta;
  
  const Template: Story<TableComponent> = (args: TableComponent) => ({
    props: args,
  });

  export const Bangtan = Template.bind({});
  Bangtan.args = {
    Headings : ['Name','Age','Position'],
    Info : [['Kim Namjoon','28','Rapper'],['Kim SeokJin','30','Vocalist'],['Min Yoongi','29','Rapper']],
    BgColor : 'Beige'
  };

  export const Blackpink = Template.bind({});
  Blackpink.args = {
    Headings : ['Name','Country','Position'],
    Info : [['Kim Jisoo','South Korea','Vocalist'],['Lalisa Manoban','Thailand','Rapper']],
    BgColor : 'Pink'
  };

  export const Txt = Template.bind({});
  Txt.args = {
    Headings : ['Name'],
    Info : [['Soobin'],['Yeonjun']]
  };