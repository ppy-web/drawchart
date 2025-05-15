import { __rest } from "tslib";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted, ref, watchEffect } from 'vue';
import { uid as getUid } from 'uid';
export const useSetupRoughVizChart = (Ctor, opts) => {
    const chartdiv = ref(null);
    const uid = 'chartdiv' + getUid();
    onMounted(() => {
        const el = chartdiv.value;
        el.id = uid;
        watchEffect(() => {
            const { chartData } = opts, otherOpts = __rest(opts, ["chartData"]);
            el.innerHTML = '';
            new Ctor(Object.assign({ element: `#${el.id}` }, Object.assign({ data: chartData }, otherOpts)));
        });
    });
    return chartdiv;
};
