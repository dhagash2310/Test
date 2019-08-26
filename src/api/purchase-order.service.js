import Parse from 'parse'

export default {
  create (shippingId, items) {
    return Parse.Cloud.run('CreateXubioPurchaseOrder', { shippingId, items })
  }
}
