import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function inappropriateKeywordsValidator(keyswords: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const text = control.value as string;
        for(const keyword of keyswords){
            if(text.toLowerCase().includes(keyword)){
                return {inappropriateKeyword: true};
            }
        }

        return null;
    }
}