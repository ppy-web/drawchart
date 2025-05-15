import { ExtractPropTypes, barChartOptions, stackedBarChartOptions, pieChartOptions, lineChartOptions, scatterChartOptions } from '../shared';
export declare type IBar = ExtractPropTypes<typeof barChartOptions>;
export declare type IStackedBar = ExtractPropTypes<typeof stackedBarChartOptions>;
export declare type IPie = ExtractPropTypes<typeof pieChartOptions>;
export declare type ILine = ExtractPropTypes<typeof lineChartOptions>;
export declare type IScatter = ExtractPropTypes<typeof scatterChartOptions>;
export declare type IChart = IBar | IStackedBar | IPie | ILine | IScatter;
export declare type IChartConfig<T extends IChart> = {
    element: string;
    data: T['chartData'];
} & Omit<T, 'chartData'>;
