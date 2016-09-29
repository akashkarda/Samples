import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-client-preview';

import styles from './DemoCustomProerties.module.scss';
import * as strings from 'mystrings';
import { IDemoCustomProertiesWebPartProps } from './IDemoCustomProertiesWebPartProps';

export default class DemoCustomProertiesWebPart extends BaseClientSideWebPart<IDemoCustomProertiesWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.demoCustomProerties}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span class="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p class="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p class="ms-font-l ms-fontColor-white">Name : ${this.properties.name}</p>
              <p class="ms-font-l ms-fontColor-white">About Me: ${this.properties.description}</p>
              <p class="ms-font-l ms-fontColor-white">Age : ${this.properties.age}</p>
              <p class="ms-font-l ms-fontColor-white">Graduate: ${this.properties.graduate}</p>
              <p class="ms-font-l ms-fontColor-white">Gender: ${this.properties.gender}</p>
              <p class="ms-font-l ms-fontColor-white">Married : ${this.properties.married}</p>
              <a href="https://github.com/SharePoint/sp-dev-docs/wiki" class="ms-Button ${styles.button}">
                <span class="ms-Button-label">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: 'About Me',
                  multiline: true
                }),
                PropertyPaneTextField('name', {
                  label: 'Name'
                }),
                PropertyPaneTextField('age', {
                  label: 'Age'
                }),
                PropertyPaneCheckbox('graduate', {
              text: 'Graduate'
            }),
              PropertyPaneDropdown('gender', {
                label: 'Gender',
                options: [
                  { key: '1', text: 'Male' },
                  { key: '2', text: 'Female' }
                ]}),
              PropertyPaneToggle('married', {
                label: 'Married',
                onText: 'Yes',
                offText: 'No'
              })

              ]
            }
          ]
        }
      ]
    };
  }
}
