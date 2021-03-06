import Ember from 'ember';
import layout from '../templates/components/sl-radio';

/**
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    /** @type {String[]} */
    attributeBindings: [
        'disabled'
    ],

    /** @type {String[]} */
    classNameBindings: [
        'disabled',
        'radioType'
    ],

    /** @type {String[]} */
    classNames: [
        'sl-radio'
    ],

    /** @type {Object} */
    layout,

    /** @type {String} */
    tagName: 'div',

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    /**
     * Whether the component is in the disabled state or not
     *
     * @type {Boolean}
     */
    disabled: false,

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Type of radio button; "radio-inline" when inline, "radio" default
     *
     * @function
     * @returns {String}
     */
    radioType: Ember.computed(
        'inline',
        function() {
            return this.get( 'inline' ) ? 'radio-inline': 'radio';
        }
    )

});
