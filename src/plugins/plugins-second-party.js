import Vue from "vue";

// MIXINS
import { MixinAssets } from "@/shared/mixins/mixin-assets";
import { MixinStudent } from "@/shared/mixins/mixin-student";
import { MixinEvents } from "../shared/mixins/mixin-events";

import { $serviceString as $string } from "@/services/service-string";
import { $serviceColor as $color } from "@/services/service-color";
import { $serviceDoc as $doc } from "@/services/service-docs";
import { $serviceDate as $date } from "@/services/service-date";
import { $serviceValidators as $validate } from "@/services/service-validators";
import { $serviceStorage as $storage } from "@/services/service-storage";
import { externalPageRedirect as $redirect } from "@/services/service-route";

Vue.mixin(MixinAssets);
Vue.mixin(MixinStudent);
Vue.mixin(MixinEvents);

Vue.mixin({
  computed: {
    $string: () => $string,
    $color: () => $color,
    $doc: () => $doc,
    $date: () => $date,
    $validate: () => $validate,
  },
});

Vue.prototype.$bus = new Vue();
Vue.prototype.$storage = $storage;
Vue.prototype.$redirect = $redirect;
