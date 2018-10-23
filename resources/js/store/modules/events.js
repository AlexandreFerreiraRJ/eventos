import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'

const __emptyModel = { id: null }

const state = merge_objects(statesMixin.common, {
    form: new Form({
        name: null,
    }),
})

const actions = merge_objects(actionsMixin, {
    select(context, payload) {
        context.commit('mutateSetSelected', payload)
        context.commit('mutateFormData', payload)

        context.dispatch('subEvents/setEvent', payload, { root: true })

        context.dispatch('invitations/setSubEvent', __emptyModel, {
            root: true,
        })
    },

    selectSubEvent(context, payload) {
        context.commit('subEvents/mutateSetSelected', payload, {
            root: true,
        })

        context.dispatch('invitations/setSubEvent', payload, { root: true })
    },

    selectInvitation(context, payload) {
        context.commit('invitations/mutateSetSelected', payload, {
            root: true,
        })
    },

    loadSubEvents(context, event) {
        return axios
            .get('/api/v1/events/' + event.id + '/sub-events', {
                params: this.subEventsQuery,
            })
            .then(response => {
                context.commit('setSubEvents', response.data)
            })
    },

    loadInvitations(context, subEvent) {
        return axios
            .get(
                '/api/v1/events/' +
                    subEvent.event.id +
                    '/sub-events/' +
                    subEvent.id +
                    '/invitations',
                { params: this.invitationsQuery },
            )
            .then(response => {
                context.commit('setInvitations', response.data)
            })
    },
})

const mutations = merge_objects(mutationsMixin, {
    selectEvent(state, payload) {
        state.selectedEvent = payload

        state.selectedSubEvent = __emptyModel

        state.selectedInvitation = __emptyModel
    },

    selectSubEvent(state, payload) {
        state.selectedSubEvent = payload

        state.selectedInvitation = __emptyModel
    },

    selectInvitation(state, payload) {
        state.selectedInvitation = payload
    },

    setSubEvents(state, payload) {
        state.subEvents = payload
    },

    setInvitations(state, payload) {
        state.invitations = payload
    },
})

export default {
    state,
    actions,
    mutations,
    namespaced: true,
}