import { Notification } from 'rsuite'

const notificationsMiddleware = () => next => action => {
	if (action.successMessage && /(.*)_(SUCCESS)/.test(action.type)) {
		Notification.success({
			title: 'Sukces',
			description: action.successMessage,
			placement: 'topStart',
		})
	}

	next(action)
}

export default notificationsMiddleware
