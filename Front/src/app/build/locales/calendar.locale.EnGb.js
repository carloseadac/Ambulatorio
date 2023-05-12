/*!
 *
 * Bryntum Calendar 5.3.5 (TRIAL VERSION)
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(i,r){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var c=r(),p=l?exports:i;for(var u in c)p[u]=c[u]}})(typeof self<"u"?self:void 0,()=>{var i={},r={exports:i},l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,y=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t)l(e,o,{get:t[o],enumerable:!0})},h=(e,t,o,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of p(t))!u.call(e,n)&&n!==o&&l(e,n,{get:()=>t[n],enumerable:!(a=c(t,n))||a.enumerable});return e},v=e=>h(l({},"__esModule",{value:!0}),e),f=(e,t,o)=>(y(e,typeof t!="symbol"?t+"":t,o),o),m={};g(m,{default:()=>D}),r.exports=v(m);var d=class{static mergeLocales(...e){let t={};return e.forEach(o=>{Object.keys(o).forEach(a=>{typeof o[a]=="object"?t[a]={...t[a],...o[a]}:t[a]=o[a]})}),t}static trimLocale(e,t){let o=(a,n)=>{e[a]&&(n?e[a][n]&&delete e[a][n]:delete e[a])};Object.keys(t).forEach(a=>{Object.keys(t[a]).length>0?Object.keys(t[a]).forEach(n=>o(a,n)):o(a)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let o={};if(t.name||t.locale)o=Object.assign({localeName:t.name},t.locale),t.desc&&(o.localeDesc=t.desc),t.code&&(o.localeCode=t.code),t.path&&(o.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);o=Object.assign({},t)}for(let a of["name","desc","code","path"])o[a]&&delete o[a];if(!o.localeName)throw new Error("Locale name can not be empty");return o}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||d.localeName}static get locale(){return d.localeName&&this.locales[d.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:o}=globalThis.bryntum,a=d.normalizeLocale(e,t),{localeName:n}=a;return!o[n]||t===!0?o[n]=a:o[n]=this.mergeLocales(o[n]||{},a||{}),o[n]}},s=d;f(s,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},s._$name="LocaleHelper";var b={localeName:"EnGb",localeDesc:"English (GB)",localeCode:"en-GB",Object:{Yes:"Yes",No:"No",Cancel:"Cancel",Ok:"OK",Week:"Week"},Combo:{noResults:"No results",recordNotCommitted:"Record could not be added",addNewValue:e=>`Add ${e}`},FilePicker:{file:"File"},Field:{badInput:"Invalid field value",patternMismatch:"Value should match a specific pattern",rangeOverflow:e=>`Value must be less than or equal to ${e.max}`,rangeUnderflow:e=>`Value must be greater than or equal to ${e.min}`,stepMismatch:"Value should fit the step",tooLong:"Value should be shorter",tooShort:"Value should be longer",typeMismatch:"Value is required to be in a special format",valueMissing:"This field is required",invalidValue:"Invalid field value",minimumValueViolation:"Minimum value violation",maximumValueViolation:"Maximum value violation",fieldRequired:"This field is required",validateFilter:"Value must be selected from the list"},DateField:{invalidDate:"Invalid date input"},DatePicker:{gotoPrevYear:"Go to previous year",gotoPrevMonth:"Go to previous month",gotoNextMonth:"Go to next month",gotoNextYear:"Go to next year"},NumberFormat:{locale:"en-GB",currency:"GBP"},DurationField:{invalidUnit:"Invalid unit"},TimeField:{invalidTime:"Invalid time input"},TimePicker:{hour:"Hour",minute:"Minute",second:"Second"},List:{loading:"Loading..."},GridBase:{loadMask:"Loading...",syncMask:"Saving changes, please wait..."},PagingToolbar:{firstPage:"Go to first page",prevPage:"Go to previous page",page:"Page",nextPage:"Go to next page",lastPage:"Go to last page",reload:"Reload current page",noRecords:"No records to display",pageCountTemplate:e=>`of ${e.lastPage}`,summaryTemplate:e=>`Displaying records ${e.start} - ${e.end} of ${e.allCount}`},PanelCollapser:{Collapse:"Collapse",Expand:"Expand"},Popup:{close:"Close Popup"},UndoRedo:{Undo:"Undo",Redo:"Redo",UndoLastAction:"Undo last action",RedoLastAction:"Redo last undone action",NoActions:"No items in the undo queue"},FieldFilterPicker:{equals:"equals",doesNotEqual:"does not equal",isEmpty:"is empty",isNotEmpty:"is not empty",contains:"contains",doesNotContain:"does not contain",startsWith:"starts with",endsWith:"ends with",isOneOf:"is one of",isNotOneOf:"is not one of",isGreaterThan:"is greater than",isLessThan:"is less than",isGreaterThanOrEqualTo:"is greater than or equal to",isLessThanOrEqualTo:"is less than or equal to",isBetween:"is between",isNotBetween:"is not between",isBefore:"is before",isAfter:"is after",isToday:"is today",isTomorrow:"is tomorrow",isYesterday:"is yesterday",isThisWeek:"is this week",isNextWeek:"is next week",isLastWeek:"is last week",isThisMonth:"is this month",isNextMonth:"is next month",isLastMonth:"is last month",isThisYear:"is this year",isNextYear:"is next year",isLastYear:"is last year",isYearToDate:"is year to date",isTrue:"is true",isFalse:"is false",selectAProperty:"Select a property",selectAnOperator:"Select an operator",caseSensitive:"Case-sensitive",and:"and",dateFormat:"D/M/YY",selectOneOrMoreValues:"Select one or more values",enterAValue:"Enter a value",enterANumber:"Enter a number",selectADate:"Select a date"},FieldFilterPickerGroup:{addFilter:"Add filter"},DateHelper:{locale:"en-GB",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"millisecond",plural:"ms",abbrev:"ms"},{single:"second",plural:"seconds",abbrev:"s"},{single:"minute",plural:"minutes",abbrev:"min"},{single:"hour",plural:"hours",abbrev:"h"},{single:"day",plural:"days",abbrev:"d"},{single:"week",plural:"weeks",abbrev:"w"},{single:"month",plural:"months",abbrev:"mon"},{single:"quarter",plural:"quarters",abbrev:"q"},{single:"year",plural:"years",abbrev:"yr"},{single:"decade",plural:"decades",abbrev:"dec"}],unitAbbreviations:[["mil"],["s","sec"],["m","min"],["h","hr"],["d"],["w","wk"],["mo","mon","mnt"],["q","quar","qrt"],["y","yr"],["dec"]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm A",LTS:"HH:mm:ss A"},ordinalSuffix:e=>{let t=["11","12","13"].find(a=>e.endsWith(a)),o="th";if(!t){let a=e[e.length-1];o={1:"st",2:"nd",3:"rd"}[a]||"th"}return e+o}}},T=s.publishLocale(b),E=new String,S={localeName:"EnGb",localeDesc:"English (GB)",localeCode:"en-GB",ColumnPicker:{column:"Column",columnsMenu:"Columns",hideColumn:"Hide column",hideColumnShort:"Hide",newColumns:"New columns"},Filter:{applyFilter:"Apply filter",filter:"Filter",editFilter:"Edit filter",on:"On",before:"Before",after:"After",equals:"Equals",lessThan:"Less than",moreThan:"More than",removeFilter:"Remove filter",disableFilter:"Disable filter"},FilterBar:{enableFilterBar:"Show filter bar",disableFilterBar:"Hide filter bar"},Group:{group:"Group",groupAscending:"Group ascending",groupDescending:"Group descending",groupAscendingShort:"Ascending",groupDescendingShort:"Descending",stopGrouping:"Stop grouping",stopGroupingShort:"Stop"},HeaderMenu:{moveBefore:e=>`Move before "${e}"`,moveAfter:e=>`Move after "${e}"`,collapseColumn:"Collapse column",expandColumn:"Expand column"},ColumnRename:{rename:"Rename"},MergeCells:{mergeCells:"Merge cells",menuTooltip:"Merge cells with same value when sorted by this column"},Search:{searchForValue:"Search for value"},Sort:{sort:"Sort",sortAscending:"Sort ascending",sortDescending:"Sort descending",multiSort:"Multi sort",removeSorter:"Remove sorter",addSortAscending:"Add ascending sorter",addSortDescending:"Add descending sorter",toggleSortAscending:"Change to ascending",toggleSortDescending:"Change to descending",sortAscendingShort:"Ascending",sortDescendingShort:"Descending",removeSorterShort:"Remove",addSortAscendingShort:"+ Ascending",addSortDescendingShort:"+ Descending"},Column:{columnLabel:e=>`${e.text?`${e.text} column. `:""}SPACE for context menu${e.sortable?", ENTER to sort":""}`,cellLabel:E},Checkbox:{toggleRowSelect:"Toggle row selection",toggleSelection:"Toggle selection of entire dataset"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`rating : ${e.location.record[e.field]||0}`:""}`}},GridBase:{loadFailedMessage:"Data loading failed!",syncFailedMessage:"Data synchronisation failed!",unspecifiedFailure:"Unspecified failure",networkFailure:"Network error",parseFailure:"Failed to parse server response",serverResponse:"Server response:",noRows:"No records to display",moveColumnLeft:"Move to left section",moveColumnRight:"Move to right section",moveColumnTo:e=>`Move column to ${e}`},CellMenu:{removeRow:"Delete"},RowCopyPaste:{copyRecord:"Copy",cutRecord:"Cut",pasteRecord:"Paste",rows:"rows",row:"row"},CellCopyPaste:{copy:"Copy",cut:"Cut",paste:"Paste"},PdfExport:{"Waiting for response from server":"Waiting for response from server...","Export failed":"Export failed","Server error":"Server error","Generating pages":"Generating pages...","Click to abort":"Cancel"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Export settings",export:"Export",exporterType:"Control pagination",cancel:"Cancel",fileFormat:"File format",rows:"Rows",alignRows:"Align rows",columns:"Columns",paperFormat:"Paper format",orientation:"Orientation",repeatHeader:"Repeat header"},ExportRowsCombo:{all:"All rows",visible:"Visible rows"},ExportOrientationCombo:{portrait:"Portrait",landscape:"Landscape"},SinglePageExporter:{singlepage:"Single page"},MultiPageExporter:{multipage:"Multiple pages",exportingPage:({currentPage:e,totalPages:t})=>`Exporting page ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Multiple pages (vertical)",exportingPage:({currentPage:e,totalPages:t})=>`Exporting page ${e}/${t}`},RowExpander:{loading:"Loading",expand:"Expand",collapse:"Collapse"}},k=s.publishLocale(S),w={localeName:"EnGb",localeDesc:"English (GB)",localeCode:"en-GB",Object:{newEvent:"New event"},ResourceInfoColumn:{eventCountText:e=>e+" event"+(e!==1?"s":"")},Dependencies:{from:"From",to:"To",valid:"Valid",invalid:"Invalid"},DependencyType:{SS:"SS",SF:"SF",FS:"FS",FF:"FF",StartToStart:"Start-to-Start",StartToEnd:"Start-to-Finish",EndToStart:"End-to-Start",EndToEnd:"End-to-End",short:["SS","SF","FS","FF"],long:["Start-to-Start","Start-to-Finish","End-to-Start","End-to-End"]},DependencyEdit:{From:"From",To:"To",Type:"Type",Lag:"Lag","Edit dependency":"Edit dependency",Save:"Save",Delete:"Delete",Cancel:"Cancel",StartToStart:"Start to Start",StartToEnd:"Start to End",EndToStart:"End to Start",EndToEnd:"End to End"},EventEdit:{Name:"Name",Resource:"Resource",Start:"Start",End:"End",Save:"Save",Delete:"Delete",Cancel:"Cancel","Edit event":"Edit event",Repeat:"Repeat"},EventDrag:{eventOverlapsExisting:"Event overlaps existing event for this resource",noDropOutsideTimeline:"Event may not be dropped completely outside the timeline"},SchedulerBase:{"Add event":"Add event","Delete event":"Delete event","Unassign event":"Unassign event"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom",activeDateRange:"Date range",startText:"Start date",endText:"End date",todayText:"Today"},EventCopyPaste:{copyEvent:"Copy event",cutEvent:"Cut event",pasteEvent:"Paste event"},EventFilter:{filterEvents:"Filter tasks",byName:"By name"},TimeRanges:{showCurrentTimeLine:"Show current timeline"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Seconds"},minuteAndHour:{topDateFormat:"ddd DD/MM, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD/MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Day"},day:{name:"Day/hours"},week:{name:"Week/hours"},dayAndWeek:{displayDateFormat:"ll LST",name:"Week/days"},dayAndMonth:{name:"Month"},weekAndDay:{displayDateFormat:"ll LST",name:"Week"},weekAndMonth:{name:"Weeks"},weekAndDayLetter:{name:"Weeks/weekdays"},weekDateAndMonth:{name:"Months/weeks"},monthAndYear:{name:"Months"},year:{name:"Years"},manyYears:{name:"Multiple years"}},RecurrenceConfirmationPopup:{"delete-title":"You are deleting an event","delete-all-message":"Do you want to delete all occurrences of this event?","delete-further-message":"Do you want to delete this and all future occurrences of this event or only the selected occurrence?","delete-further-btn-text":"Delete All Future Events","delete-only-this-btn-text":"Delete Only This Event","update-title":"You are changing a repeating event","update-all-message":"Do you want to change all occurrences of this event?","update-further-message":"Do you want to change only this occurrence of the event or this and all future occurrences?","update-further-btn-text":"All Future Events","update-only-this-btn-text":"Only This Event",Yes:"Yes",Cancel:"Cancel",width:600},RecurrenceLegend:{" and ":" and ",Daily:"Daily","Weekly on {1}":({days:e})=>`Weekly on ${e}`,"Monthly on {1}":({days:e})=>`Monthly on ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`Yearly on ${e} of ${t}`,"Every {0} days":({interval:e})=>`Every ${e} days`,"Every {0} weeks on {1}":({interval:e,days:t})=>`Every ${e} weeks on ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`Every ${e} months on ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:o})=>`Every ${e} years on ${t} of ${o}`,position1:"the first",position2:"the second",position3:"the third",position4:"the fourth",position5:"the fifth","position-1":"the last",day:"day",weekday:"weekday","weekend day":"weekend day",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Repeat event",Cancel:"Cancel",Save:"Save",Frequency:"Frequency",Every:"Every",DAILYintervalUnit:"day(s)",WEEKLYintervalUnit:"week(s)",MONTHLYintervalUnit:"month(s)",YEARLYintervalUnit:"year(s)",Each:"Each","On the":"On the","End repeat":"End repeat","time(s)":"time(s)"},RecurrenceDaysCombo:{day:"day",weekday:"weekday","weekend day":"weekend day"},RecurrencePositionsCombo:{position1:"first",position2:"second",position3:"third",position4:"fourth",position5:"fifth","position-1":"last"},RecurrenceStopConditionCombo:{Never:"Never",After:"After","On date":"On date"},RecurrenceFrequencyCombo:{None:"No repeat",Daily:"Daily",Weekly:"Weekly",Monthly:"Monthly",Yearly:"Yearly"},RecurrenceCombo:{None:"None",Custom:"Custom..."},Summary:{"Summary for":e=>`Summary for ${e}`},ScheduleRangeCombo:{completeview:"Complete schedule",currentview:"Visible schedule",daterange:"Date range",completedata:"Complete schedule (for all events)"},SchedulerExportDialog:{"Schedule range":"Schedule range","Export from":"From","Export to":"To"},ExcelExporter:{"No resource assigned":"No resource assigned"},CrudManagerView:{serverResponseLabel:"Server response:"},DurationColumn:{Duration:"Duration"}},F=s.publishLocale(w),C={localeName:"EnGb",localeDesc:"English (GB)",localeCode:"en-GB",EventEdit:{Calendar:"Calendar","All day":"All day",day:"Day",week:"Week",month:"Month",year:"Year",decade:"Decade"},EventMenu:{duplicateEvent:"Duplicate event",copy:"copy"},Calendar:{Today:"Today",next:e=>`Next ${e}`,previous:e=>`Previous ${e}`,plusMore:e=>`+${e} more`,allDay:"All day",endsOn:e=>`Ends ${e}`,weekOfYear:([e,t])=>`Week ${t}, ${e}`,loadFail:"Calendar data load failed. Please contact your system administrator"},CalendarDrag:{holdCtrlForRecurrence:"Hold CTRL for a recurring event"},CalendarMixin:{eventCount:e=>`${e||"No"} event${e&&e>1?"s":""}`},EventTip:{"Edit event":"Edit event",timeFormat:"LST"},ModeSelector:{includeWeekends:"Include weekends",weekends:"Weekends"},AgendaView:{Agenda:"Agenda"},MonthView:{Month:"Month",monthUnit:"month"},WeekView:{weekUnit:"week"},YearView:{Year:"Year",yearUnit:"year"},EventList:{List:"List",Start:"Start",Finish:"Finish",days:e=>`${e>1?`${e} `:""}day${e===1?"":"s"}`},DayView:{Day:"Day",dayUnit:"day",daysUnit:"days",expandAllDayRow:"Expand all-day section",collapseAllDayRow:"Collapse all-day section",timeFormat:"LST"},Sidebar:{"Filter events":"Filter events"},WeekExpander:{expandTip:"Click to expand row",collapseTip:"Click to collapse row"}},D=s.publishLocale(C);if(typeof r.exports=="object"&&typeof i=="object"){var x=(e,t,o,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,n)&&n!==o&&Object.defineProperty(e,n,{get:()=>t[n],enumerable:!(a=Object.getOwnPropertyDescriptor(t,n))||a.enumerable});return e};r.exports=x(r.exports,i)}return r.exports});
