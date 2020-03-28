import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'regExFilter',
})

export class RegExFilter implements PipeTransform {
    private isRegEx(pattern: string): boolean {
        return pattern.includes('(') || pattern.includes('+') || pattern.includes('*') || pattern.includes('.');
    }
    transform(tab: string[], regex: boolean): string[] {
        if (!tab) {
            return tab;
        }
        if (regex) {
            return tab.filter(v => {
                const s = v.toUpperCase();
                return this.isRegEx(s);
            });
        }
        return tab.filter(v => {
            const s = v.toUpperCase();
            return !this.isRegEx(s);
        });
    }
}
