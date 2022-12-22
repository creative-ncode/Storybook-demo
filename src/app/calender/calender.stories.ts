import { Meta,Story } from "@storybook/angular";
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from "../options/options.component";
import { CalenderComponent } from "./calender.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import '../../assets/scripts.js'
export default {
    title: 'calender',
    component: CalenderComponent,
    decorators: [
      moduleMetadata({
        declarations: [OptionsComponent],
        imports: [CommonModule,OwlDateTimeModule,OwlNativeDateTimeModule,FormsModule,BrowserAnimationsModule],
      }),
    ],
  } as Meta;
  
  const Template: Story<CalenderComponent> = (args: CalenderComponent) => ({
    props: args,
  });

  export const TwelveHoursFormat = Template.bind({});
  TwelveHoursFormat.args = {
    twelveHours : true
  };

  export const TwentyFourHoursFormat = Template.bind({});
  TwentyFourHoursFormat.args = {
    twelveHours : false
  };


