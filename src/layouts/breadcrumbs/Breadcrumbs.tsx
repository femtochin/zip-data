import * as React from "react";
import { BreadcrumbComponent, BreadcrumbItemsDirective, BreadcrumbItemDirective } from '@syncfusion/ej2-react-navigations'


const ActiveLastBreadcrumb = () => {
  return (
    <>
    <BreadcrumbComponent enableNavigation={false}>
:       <BreadcrumbItemsDirective>
            <BreadcrumbItemDirective iconCss="e-icons e-home" url="https://ej2.syncfusion.com/home/react.html#platform"/>
            <BreadcrumbItemDirective text="Components" url="https://ej2.syncfusion.com/react/demos/#/material/grid/overview/"/>
            <BreadcrumbItemDirective text="Navigations" url="https://ej2.syncfusion.com/react/demos/#/material/menu/default"/>
            <BreadcrumbItemDirective text="Breadcrumb" url="./breadcrumb/default"/>
        </BreadcrumbItemsDirective>
    </BreadcrumbComponent>
    </>
  )
}

export default ActiveLastBreadcrumb
