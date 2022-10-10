import { CommonModule } from "@angular/common";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { TableComponent } from "projects/sistema/src/app/shared/components/table/table.component";
import { SharedModule } from "projects/sistema/src/app/shared/shared.module";

export default {
    title: "Ambulance/Table",
    component: TableComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [SharedModule, CommonModule],
        })
    ]
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
    props: args,

})

export const MetaData = Template.bind({})

MetaData.args = {
    dataSource: [
        {
            id: 1,
            name: 'user01',
            email: 'user01@corre.com'
        },
        {
            id: 2,
            name: 'user02',
            email: 'user02@corre.com'
        }
    ],
    metaColumns: [
        {
            field: 'id',
            title: 'ID'
        },
        {
            field: 'name',
            title: 'Nombre'
        },
        {
            field: 'email',
            title: 'Correo'
        }
    ]
};

export const TwoColumns = Template.bind({})

TwoColumns.args = {
    dataSource: [
        {
            name: 'user01',
            email: 'user01@corre.com'
        },
        {
            name: 'user02',
            email: 'user02@corre.com'
        }
    ],
    metaColumns: [
        {
            field: 'name',
            title: 'Nombre'
        },
        {
            field: 'email',
            title: 'Correo'
        }
    ]
};