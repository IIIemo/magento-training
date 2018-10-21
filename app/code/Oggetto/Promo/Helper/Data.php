<?php

namespace Oggetto\Promo\Helper;

use Magento\Framework\App\Helper\AbstractHelper;

class Data extends AbstractHelper
{
    public function getPromoBlockId(): int
    {
        return (int) $this->scopeConfig->getValue('promotions/general/block');
    }
}
