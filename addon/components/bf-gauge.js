import Ember from 'ember';
import layout from '../templates/components/bf-gauge';

export default Ember.Component.extend({
  layout: layout,

  // SVG attributes
  tagName: 'svg',
  attributeBindings: ['viewBox', 'width'],
  viewBox: '0 0 84 68',
  width: '100%',

  // Default parameters
  value: 0,
  min: 0,
  max: 100,
  color: '#337ab7',

  // Computed properties
  ratio: Ember.computed('value', 'min', 'max', function() {
    if (!isFinite(this.get('value')) || !isFinite(this.get('min')) || !isFinite(this.get('max'))) return 0;
    var ratio = (Math.max(0, this.get('value') - this.get('min'))) / Math.max(0, this.get('max') - this.get('min'));
    return Math.min(1, ratio);
  }),
  percentage: Ember.computed('ratio', function() {
    return (this.get('ratio') * 100).toFixed(0) + '%';
  }),
  xOffset: 42,
  yOffset: 56,
  ax: Ember.computed('ratio', function() {
    var radians = this.get('ratio') * Math.PI;
    return -40 * Math.cos(radians).toFixed(5) + this.get('xOffset');
  }),
  ay: Ember.computed('ratio', function() {
    var radians = this.get('ratio') * Math.PI;
    return -40 * Math.sin(radians).toFixed(5) + this.get('yOffset');
  }),
  bx: Ember.computed('ratio', function() {
    var radians = this.get('ratio') * Math.PI;
    return -25 * Math.cos(radians).toFixed(5) + this.get('xOffset');
  }),
  by: Ember.computed('ratio', function() {
    var radians = this.get('ratio') * Math.PI;
    return -25 * Math.sin(radians).toFixed(5) + this.get('yOffset');
  }),
});
