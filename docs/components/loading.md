# Loading Indicators
## ProgressBar
*mixin*

**Tag:** `div`  
**Class:** `mdl-progress mdl-js-progress` and `mdl-progress__indeterminate` if `progress` Attribute is not set

**Attributes:**
* `progress`: A number which will be passed to `MaterialProgress.setProgress()`. If set also removes `mdl-progress__indeterminate`
* `buffer`: A number which will be passed to `MaterialProgress.setBuffer()`.

**WARNING:** The JavaScript portion of this is not tested across redraws and might break.
