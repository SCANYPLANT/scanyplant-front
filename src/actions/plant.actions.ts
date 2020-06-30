import { plantConstants } from '../constants';
import { plantService } from '../services/plant.service';

export const plantActions = {
	searchPlantByImg,
	searchPlantByName,
};

function searchPlantByImg(data) {
	return dispatch => {
		dispatch(request({ data }));

		plantService.searchByImg(data).then(
			data => {
				dispatch(success(data));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request(data) {
		return { type: plantConstants.SEARCH_PLANT_BY_IMG_REQUEST, data };
	}

	function success(data) {
		return { type: plantConstants.SEARCH_PLANT_BY_IMG_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.SEARCH_PLANT_BY_IMG_FAILURE, error };
	}
}

function searchPlantByName(data) {
	return dispatch => {
		dispatch(request({ data }));

		plantService.searchByName(data).then(
			data => {
				dispatch(success(data));
			},
			error => {
				dispatch(failure(error.toString()));
			},
		);
	};

	function request(data) {
		return { type: plantConstants.SEARCH_PLANT_BY_NAME_REQUEST, data };
	}

	function success(data) {
		return { type: plantConstants.SEARCH_PLANT_BY_NAME_SUCCESS, data };
	}

	function failure(error) {
		return { type: plantConstants.SEARCH_PLANT_BY_NAME_FAILURE, error };
	}
}
