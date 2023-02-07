const opa = require("@zregvart/opa-inspect");

opa.inspect("example.rego", `
package example
# METADATA
# title: Some title
# description: |-
#   Some description
#
deny[msg] {
  msg := "nope"
}
`).then(json => {
  console.log(JSON.stringify(json));
});
