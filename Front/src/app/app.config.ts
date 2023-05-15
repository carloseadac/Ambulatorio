import { CalendarConfig, ProjectModelConfig } from '@bryntum/calendar';

export const projectConfig: Partial<ProjectModelConfig> = {
    // Empty project config
};

export const calendarConfig: Partial<CalendarConfig> = {
    date : new Date(),
    features : {
        eventEdit : false,

    },
};