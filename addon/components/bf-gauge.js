import Ember from 'ember';
import layout from '../templates/components/bf-gauge';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'svg',
  attributeBindings: ['viewBox', 'width'],
  viewBox: '0 0 90 72',
  width: '100%'
});
