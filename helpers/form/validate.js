export function validate () {
  console.log(this)
  this.$refs.form.validate()
  if (!this.valid) {
    return false
  }else{
    return true
  }
}
