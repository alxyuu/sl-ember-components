import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent( 'sl-modal-body', 'Unit | Component | sl modal body', {
    unit: true
});

test( 'It renders', function( assert ) {
    const component = this.subject();

    assert.equal(
        component._state,
        'preRender'
    );

    this.render();

    assert.equal(
        component._state,
        'inDOM'
    );
});

test( 'Modal body exists', function( assert ) {
    assert.equal(
        this.$('.modal-body').length,
        1
    );
});

test( 'Content is yielded', function( assert ) {
    const content = '<div class="test"></div>';

    this.subject({
        template: Ember.Handlebars.compile( content )
    });

    assert.equal(
        this.$('.test').length,
        1
    );
});
