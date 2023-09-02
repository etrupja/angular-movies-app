import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailDomainValidator(domain: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        const email = control.value as string;

        if(email.endsWith(domain))
        {
            return null;
        } else {
            return {invalidDomain: true}
        }

    }
}