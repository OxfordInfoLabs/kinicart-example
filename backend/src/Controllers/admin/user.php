<?php

namespace KinicartExample\Controllers\admin;

use Kinikit\MVC\Framework\Controller\RESTService;

class user extends RESTService {

    use \Kinicart\WebServices\ControllerTraits\Admin\UserTrait;

}
