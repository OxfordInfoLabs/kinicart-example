<?php

namespace KinicartExample\Controllers\customer;

use Kinikit\MVC\Framework\Controller\RESTService;

class user extends RESTService {

    use \Kinicart\WebServices\ControllerTraits\Customer\UserTrait;

}
