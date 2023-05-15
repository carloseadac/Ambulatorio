export class shiftsDto {
    Idshift = 0;
    ShiftName: string = '';
    startDate = new Date();
    EndDate: Date | null = null;
    Sunday: boolean = true;
    Monday: boolean = true;
    Tuesday: boolean = true;
    Wednesday: boolean = true;
    Thursday: boolean = true;
    Friday: boolean = true;
    Saturday: boolean = true;
}