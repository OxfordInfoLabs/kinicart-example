<?php

namespace KinicartExample\Controllers\guest;

use Kinikit\MVC\Framework\Controller\RESTService;

class auth extends RESTService {

    use \Kinicart\WebServices\ControllerTraits\Guest\Auth;

}
