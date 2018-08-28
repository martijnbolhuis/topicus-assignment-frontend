export interface IMedicine {
  id: number;
  name: string;
  children: IMedicineChildren;

}

export interface IMedicineChildren {
  medicineforms: IMedicineForm[];
}

export interface IMedicineForm {
  id: number;
  name: string;

  // This property contains the text that is shown in the select. It is
  // set client side.
  label: string;

  medicine_id: number;

  package_amount: number;
  package_unit: string;

  content_amount: number;
  content_unit: string;
}

export class IRecipe {
  bsn_number: string;
  prescription_date: string;
  end_date: string;
  delivery_method: string;
  medicines: IRecipeMedicine[];
}

export interface IRecipeMedicine {
  medicine_form_id: number;
  usage: string;
}

//export enum DeliveryMethods {
//  pickup = "pickup",
//  delivery = "delivery"
//}
//
//export namespace DeliveryMethods {
//
//  export function values() {
//    return Object.keys(DeliveryMethods).filter(
//      (type) => isNaN(<any>type) && type !== 'values'
//    );
//  }
//}

