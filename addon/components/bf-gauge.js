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
  ratio: Ember.computed('value', 'max', function() {
    return (Math.max(0, this.get('value') - this.get('min'))) / Math.max(0, this.get('max') - this.get('min'));
  }),
  percentage: Ember.computed('ratio', function() {
    return (this.get('ratio') * 100).toFixed(0) + '%';
  }),
  xOffset: 42,
  yOffset: 56,
  ax: Ember.computed('ratio', function() {
    return -40 * Math.cos(this.get('ratio') * Math.PI).toFixed(5) + this.get('xOffset');
  }),
  ay: Ember.computed('ratio', function() {
    return -40 * Math.sin(this.get('ratio') * Math.PI).toFixed(5) + this.get('yOffset');
  }),
  bx: Ember.computed('ratio', function() {
    return -25 * Math.cos(this.get('ratio') * Math.PI).toFixed(5) + this.get('xOffset');
  }),
  by: Ember.computed('ratio', function() {
    return -25 * Math.sin(this.get('ratio') * Math.PI).toFixed(5) + this.get('yOffset');
  }),
});
