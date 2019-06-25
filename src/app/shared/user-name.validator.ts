import { AbstractControl, ValidatorFn, ControlContainer } from "@angular/forms";
//The validations fails then it  returns object where the key is of type  String and the value is of type any and if the validation passed validation is passed it will return null

export function forbiddenNameValidator(forbiddenName:RegExp):ValidatorFn {
    return (contrrol:AbstractControl):{[key:string]:any } | null =>{
        const forbidden= forbiddenName.test(contrrol.value);
        return forbidden ?{'forbiddenName':{value:contrrol.value}}:null;
    };
}