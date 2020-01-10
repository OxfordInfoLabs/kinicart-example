<?php

namespace KinicartExample\Services\Product\PackagedProduct;


use Kinicart\Objects\Product\PackagedProduct\Feature;
use Kinicart\Services\Product\PackagedProduct\PackagedProduct;

/**
 * Class VirtualHost
 * @package KinicartExample\Objects\Product\PackagedProduct
 *
 * @noGenerate
 */
class VirtualHost extends PackagedProduct {


    /**
     * Get a list of features which this product makes available.  Features are combined
     * into packages for sale purposes.
     *
     * @return Feature[]
     */
    public function getFeatures() {
        return [
            new Feature("memory", "Memory (GB)", "The amount of memory allocated to this VM", "GB"),
            new Feature("diskSpace", "Disk Space (GB)", "The amount of disk space allocated to this VM", "GB"),
            new Feature("bandwidth", "Bandwidth (GB/month)", "The amount of bandwidth in GB/Month", "GB/Month"),
        ];
    }

    /**
     * Get the title for this product
     *
     * @return string
     */
    public function getTitle() {
        return "Virtual Host";
    }

    /**
     * Get the description for this product
     *
     * @return string
     */
    public function getDescription() {
        return "Virtual hosts rented on a monthly basis";
    }
}
