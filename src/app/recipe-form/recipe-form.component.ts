import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { IRecipe, IMedicine, IRecipeMedicine } from '../data-model';
import { RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public deliveryMethods = ['pickup', 'delivery'];
  public recipeForm: FormGroup;
  public medicines: IMedicine[];
  public selectedMedicines: any[] = [];
  public medicineForms: any[] = [];

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {

  }

  public createForm() {
    this.recipeForm = this.fb.group({
      bsnNumber: '',
      prescriptionDate: '',
      endDate: '',
      deliveryMethod: 'pickup',
      medicineForm: this.fb.array([this.initMedicineForm()])
    });
  }

  public initMedicineForm() {
    return this.fb.group({
      medicine: '',
      usage: ''
    });

  }

  public addMedicine() {
    //this.selectedMedicines = this.recipeForm.get('medicineForm') //as FormArray;
    (<FormArray>this.recipeForm.get('medicineForm')).push(this.initMedicineForm());
  }

  public saveRecipe() {
    let recipe = <IRecipe>{
      bsn_number: this.recipeForm.get('bsnNumber').value,
      prescription_date: this.recipeForm.get('prescriptionDate').value,
      end_date: this.recipeForm.get('endDate').value,
      delivery_method: this.recipeForm.get('deliveryMethod').value
    }

    recipe.medicines = (<FormArray>this.recipeForm.get('medicineForm')).controls.map(fc =>{
      return <IRecipeMedicine>{
        medicine_form_id: fc.value.medicine,
        usage: fc.value.usage
      }
    });

    this.recipeService.saveRecipe(recipe).subscribe(response => {});
  }

  public getMedicines() {
    this.recipeService.getMedicines().subscribe(response => {
      this.medicines = <IMedicine[]>response;

      let medicineForms = this.medicines.map(medicine => {
        medicine.children.medicineforms.forEach(medicineForm => {
          medicineForm.label = medicine.name + ' ' + medicineForm.name;
        });

        return medicine.children.medicineforms;
      });

      //flatten
      this.medicineForms = [].concat(...medicineForms);
    });
  }

  ngOnInit() {
    this.createForm();
    this.getMedicines();
  }

}
