export interface IMedicine {
  id: number;
  name: string;
  children: IMedicineForm[];

}

export interface IMedicineForm {
  id: number;
  name: string;

  medicine_id: number;

  package_amount: number;
  package_unit: string;

  content_amount: number;
  content_unit: string;
}

export interface IRecipe {
  bsn_number: string,
  prescription_date: string,
  end_date: string,
  delivery_method: string
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

