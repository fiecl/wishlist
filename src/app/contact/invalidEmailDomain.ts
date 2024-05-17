import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidDomainValidator(hosts: string[]) : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value?.toLowerCase(); // ?. operator: if there is a value, then it'll be converted to lowercase, otherwise, value == null

        // !value : if we don't have a value, i.e. value == null
        if (!value) {
            return null;
        }
    
        const matches = hosts.some(host => value.indexOf(`@${host}`) > -1); // Basically, if some of the hosts are substrings in the form control's value, then we have an error that we need to return (which is what we want)
    
        // invalidEmailDomain: this is the error name itself
        return matches ? { invalidEmailDomain: true } : null;
    
    }
}