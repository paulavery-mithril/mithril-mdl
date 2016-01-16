# Inputs
## TextInput
**Tag:** `div` wrapping `input`, `label` and optionally `span`  
**Class:** `mdl-textfield mdl-js-textfield`, `mdl-textfield_input`, `mdl-textfield__label` and `mdl-textfield__error`

**Attributes:**
All default attributes (`class`, `id`, `value` etc.) are assigned to the `input` element. `id` has to be passed to allow for a label.
* `label`: sets text content of the `label`
* `error`: if this and pattern is set, adds a `span`, with this text set as its text content.
* `pattern`: sets `pattern` property of the `input`
* `floating`: sets `mdl-textfield--floating-label` on the `div`
* `outerClass`: additional classes to apply to the `div` (should be a string)
