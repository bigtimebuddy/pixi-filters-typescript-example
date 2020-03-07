/// <reference types="pixi-filters" />
import * as f from 'pixi-filters';
declare global {
    namespace PIXI.filters {
        export import AdjustmentFilter = f.AdjustmentFilter;
        export import CrossHatchFilter = f.CrossHatchFilter;
        export import GlowFilter = f.GlowFilter;
        export import KawaseBlurFilter = f.KawaseBlurFilter;
    }
}
